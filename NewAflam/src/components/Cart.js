import { useState } from "react"

function Cart(props) {
    let cartStatus = props.status

    const [st, setSt] = useState(cartStatus);
    console.log(cartStatus)
    return (
        <div className={st === true ? "cart-box opened" : "cart-box"}>
            <span onClick={() => setSt(false)} className="close">&times;</span>
            <div className="message">تم تنفيذ طلبك بنجاح</div>
            <div className="error">من فضلك قم باختيار السعر</div>
            <h2>Shopping Cart</h2>
            <div className="row">
                <div>
                    <div className="items">

                    </div>
                    <div className="form confirm-form">
                        <form>
                            <div className="">
                                <label>Choose The Day</label>
                                <input type="date" required name="date" id="movie-date" />
                            </div>
                            <div>
                                <label>Choose the time</label>
                                <input type="time" required name="time" id="movie-time" />
                            </div>
                            <div>
                                <label>Choose the price</label>
                                <select name="price" id="movie-price">
                                    <option value="0">-- Choose the Price--</option>
                                    <option value="200">VIP 200</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                            <button type="submit">Confirm Order</button>
                        </form>

                    </div>
                </div>
                <div>
                    <div className="confirmed">
                    </div>
                    <div className="total">
                        <h2>Total : $ <span className="value"></span></h2>
                    </div>
                    <div className="clear-div">
                        <button className="clear-all">Clear Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart