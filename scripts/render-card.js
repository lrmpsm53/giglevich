const fullLookObject = document.getElementById('fullLook');


function Card(card_object){
        return(
            <div id="card" className="card">
                <Header header={card_object.header}/>
                <District district={card_object.district}/>
                <Status status={card_object.status}/>
                <Adress adress={card_object.adress}/>
                <Photo photo={card_object.photo}/>
                <Button/>
            </div>
        )  
}

class Header extends React.Component{
    render(){
        return(
            <h1 className="headline card__headline headline_font-size_36px">{this.props.header}</h1>
        )
    }
}

class District extends React.Component{
    render(){
        return(
            <p className="paragraph card__paragraph"><b>Район:</b> {this.props.district}</p>
        )
    }
}

class Status extends React.Component{
    render(){
        return(
            <p className="paragraph card__paragraph"><b>Статус:</b> {this.props.status}</p>
        )
    }
}

class Adress extends React.Component{
    render(){
        if(this.props.adress != undefined){
            return(
                <p className="paragraph card__paragraph"><b>Адрес:</b> {this.props.adress}</p>
            )
        } else return("")
    }
}

class Photo extends React.Component{
    constructor(props){
        super(props)
        this.bigImage = this.bigImage.bind(this);
    }
    bigImage(){
            ReactDOM.render(
                <Big_image src ={this.props.photo}/>,
                fullLookObject
            )
    }
    render(){
        if(this.props.photo != undefined){
            return(
                <img className="card__photo" src={this.props.photo} onClick={this.bigImage} />
            )
        } else return('')
    }
}

class Big_image extends React.Component{
    constructor(props){
        super(props)
        this.src = props.src;
        this.closeImage = this.closeImage.bind(this);
    }
    closeImage(){
        ReactDOM.render(
            "",
            fullLookObject
        )
    }
    render(){
        return(
        <div className="fullLook map__picture">
            <img className="fulllook__picture" src={this.src}/>
            <img className="fullLook__close" src="./sources/icons/close.svg" onClick={this.closeImage}/>
        </div>
        )
    }
}

class Button extends React.Component{
    constructor(props){
        super(props)
        this.closeCard =this.closeCard.bind();
    }
    closeCard(){
        ReactDOM.render(
            '',
            document.getElementById('root')
        )
    }
    render(){
        return(
            <button className="paragraph button card__button" onClick={this.closeCard}>закрыть</button>
        )
    }
}



