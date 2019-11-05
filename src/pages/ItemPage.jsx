import React from "react";
import PropTypes from "prop-types";
import "./itempage.css";
import FancyButton from "../components/FancyButton.jsx";

class ItemPage extends React.PureComponent{

  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount() {
   this.fetchItem();
  }
  fetchItem = () => {
    fetch(`/api/v1/items/${this.props.match.params.itemId}`)
    .then(res => {
      return res.json();
    })
    .then(item =>{
      console.log("item", item);
      this.setState({
        ...item
      });
    })
    .catch(err =>{
      console.log("item page", err);
    });
  };
    render(){
      return (
        <>
        <div className={"box spacer itemPage"}>
          <div style = {{
            display: "flex",
          }}>
            <div className={"itemPage-left"}>
              <img src={this.state.imgSrc} />
            </div>
            <div className={"itemPage-content"}>
              <div><h2>{this.state.title}</h2></div>
              <div>
                <p className={"text--bold text--yellow"}>
                  {this.state.price} €
                </p>
              </div>
              <div>
                <p style={{textAlign: "justify"}}>
                  {loremIpsum}
                </p>
              </div>
            </div>
            </div>
            <div className={"itemPage-footer"}>
              <FancyButton onClick={()=>0}>Osta</FancyButton>
            </div>
          </div>
        </>
      );
    }
  }

  ItemPage.propTypes ={
    match: PropTypes.object.isRequired,
  };

  export default ItemPage;

  const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";