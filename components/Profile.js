export default function Profile({img, name}) {
    return (
        <>
            <div className="profile">
                <div className="image">
                    <img src={img}></img>
                </div>
                <div className="name">
                    { name }
                </div>
                <div className="summary">
                I am a Full Stack Web Developer with more experience in Web Development than 7 years.
                </div>
                <h1>Articles</h1>
            </div>
        </>
    )
}