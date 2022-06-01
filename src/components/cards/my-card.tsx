import { Component, Prop, h , getAssetPath, State , forceUpdate , Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  /**
   *  more modal activation
   */
  @State() more_is_open: boolean = false;

  @Prop() moreOption : Array<string> = [];

  @State() moreOptionIsCheck : Array<boolean> = [];

  @State() cardIsActive : boolean = false;

  @State() renderNumber : number = 0;

  @Prop() title : string;

  @Prop() number : number;

  @Event() optionChecked : EventEmitter;

  constructor() {
    this.moreOption.forEach(() => {
      this.moreOptionIsCheck.push(false);
    });
  }

  componentDidLoad() {
    console.log('componentDidLoad');
  }

  componentDidUpdate() {
    console.log(this.moreOptionIsCheck);
  }

  moreSelectAll = () :void => {
    this.moreOptionIsCheck = this.moreOptionIsCheck.map(() => true);
  }

  moreUnselectAll = () : void => {
    this.moreOptionIsCheck = this.moreOptionIsCheck.map(() => false);
  }

  moreAllIsChecked = () : boolean=> {
    return this.moreOptionIsCheck.every(item => item === true);
  }

  moreOptionIsChecked = (index : number) : boolean => {
    const ischecked : boolean =  this.moreOptionIsCheck[index];
    return ischecked;
  }

  getChecboxId = (index : number) : string => {
    return `checkbox${index}`;
  }

  moreNumberOfChecked = () : number => {
    return this.moreOptionIsCheck.filter(item => item === true).length;
  }

  moreSelectionLogic = () : void=> {
    const allIsChecked : boolean = this.moreAllIsChecked();
    if (allIsChecked) {
      this.moreUnselectAll();
    }
    else {
      this.moreSelectAll();
    }
  }

  moreOptionClick = (index :number) : void => {
    this.moreOptionIsCheck[index] = !this.moreOptionIsCheck[index];
    forceUpdate(this);
    console.log(` moreOptionClick ${index}`);
  }

  swipeMoreModal = () : void => {
    this.more_is_open = !this.more_is_open;
  }

  More = ({}) => {
    if(!this.more_is_open) return null;
    return <div class="more-view">
        <p class="more-view-title"  onClick={()=>{this.moreSelectionLogic()}}> Tout {!this.moreAllIsChecked()?"selectionner":"deselectionner"} </p>
        {
          this.moreOption.map((option,index) => {
            return <div class="more-option-view" key={index}>
                <input
                  type="checkbox"
                  id={this.getChecboxId(index)}
                  checked={this.moreOptionIsChecked(index)} onChange={()=>this.moreOptionClick(index)}
                  />
                <label htmlFor={this.getChecboxId(index)}>
                    {option}
                </label>
            </div>
          })
        }
    </div>
  }

  render() {
    return <div class="card">
    <div class="card-header">
        <div class="check view">
            <input type="checkbox" id="checkbox" onChange={()=>this.moreSelectionLogic()} checked={this.moreAllIsChecked()}/>
            <label htmlFor="checkbox">
                {this.moreNumberOfChecked()}/{this.moreOption.length}
            </label>
        </div>
        <div class="edit-view" >
            <img src={getAssetPath("./assets/ellipsis.svg")} alt="icon" class="icon" onClick={()=>this.swipeMoreModal()} />
            <this.More />
        </div>
        </div>
        <div class="card-body">
            <div class="title title-view">
                {this.title}
            </div>
            <div class="title title-count">
                {this.number}
            </div>
        </div>
    </div>
  }
}
