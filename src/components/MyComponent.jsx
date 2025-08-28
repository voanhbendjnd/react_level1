import './style.css'
const MyComponent = () => {
    const hangni = "Hằng Ni";
    const array = [1, 2, 3];
    const object = {
        Name: "Ben",
        Age: 12
    }
    return (
      <>
            <div className="child" style={
                {fontWeight:"bold"}
            }>
                Hello my name is {hangni} {object.Age} {JSON.stringify(object)} {JSON.stringify(array)}
            </div>
            <div>
                {console.log("HANG NI")}
            </div>
      </>
    );
}

export default MyComponent;