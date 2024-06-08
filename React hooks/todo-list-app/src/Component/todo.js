import { useState } from "react"
import "../App.css"

export default function Todo() {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([])


    const addItem = () => {
        if (!inputData) {

        }
        else {
            setItems([...items, inputData]);
            setInputData('')
        }

    }


    const deleteItem = (id) => {
        console.log(id);
        const updateditems = items.filter((elem,ind) => {
            return ind !== id;
        })

        setItems(updateditems);
        
    }

    const removeAll = () => {
        setItems([])
    }

    return (
        <>
            <div className="main-div">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div style={{ paddingBottom: "20px" }}>
                                <h4>Add Your List Here</h4>
                            </div>

                            <div className="container" style={{ paddingBottom: "20px" }}>
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">
                                        {/* <div className="show-item2 form-check-inline input-group">
                                            <input type="text" className="form-control" placeholder="Add Items..." />
                                            <i className="fa fa-plus" aria-hidden="true" title="Add Item"></i>
                                        </div> */}
                                        <div className="input-group">

                                            <input type="text" className="form-control" placeholder="Add Items..."
                                                value={inputData}
                                                onChange={(e) => setInputData(e.target.value)}
                                            />
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-plus" title="Add Item" onClick={addItem}></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="container" style={{ paddingBottom: "20px" }}>
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">

                                        {
                                            items.map((elem, ind) => {
                                                return (
                                                    <div className="show-item" key={ind}>
                                                        <p style={{ position: "relative", top: "5px" }}> {elem} </p>
                                                        <i style={{ position: "relative", top: "9px" }} className="fa fa-trash" aria-hidden="true" title="Delete Item" onClick={()=> deleteItem(ind)}></i>
                                                    </div>
                                                )
                                            })
                                        }
                                        {/* <div className="show-item">
                                            <p style={{ position: "relative", top: "5px" }}>Apple</p>
                                            <i style={{ position: "relative", top: "9px" }} className="fa fa-trash" aria-hidden="true" title="Add Item"></i>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">
                                        <button className="btn-end" onClick={removeAll}>REMOVE ALL</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}