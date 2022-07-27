import './card.style.css';

const Card = ({monster}) => {
    const { name, email, id } = monster;
    console.log('Card rendered');

    return (
    <div className = "card-container" key={id}>
        <img src = {`https://robohash.org/${id}?set=set2`} alt = {`monster ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    );
}

export default Card;