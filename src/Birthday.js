export default function Birthday(props) {
    return (
        <>
            {props.people.map((person) => {
                const id = person.id;
                const name = person.name;
                const age = person.age;
                const image = person.image;

                return (
                    <article key={id} className="content">
                        <img src={image} alt={name} />
                        <div className="content-info">
                            <h4 className="name">{name}</h4>
                            <p className="age">{age} years</p>
                        </div>
                    </article>
                )
            })}            
        </>
    )
}