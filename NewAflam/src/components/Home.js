

function Home({ cartItems, toggleOpen, opened, selected, total, deleteItem, handleSubmit, clearCart, date, changeDate, time, changeTime, changePrice }) {

    return (
        <div className="top-nav">
            <a href="/" className="logo"><img src="images/Logo.png" alt="" /></a>
            <div className="top-links">
                <span onClick={toggleOpen} className="cart-btn"><img src="images/cart2.png" width="50" alt="" /></span>
            </div>
            <div className={opened === true ? "cart-box opened" : "cart-box"}>
                <span onClick={() => toggleOpen()} className="close">&times;</span>
                <div className="message">تم تنفيذ طلبك بنجاح</div>
                <div className="error">من فضلك قم باختيار السعر</div>
                <h2>Shopping Cart</h2>
                <div className="row">
                    <div>
                        <div className="items">
                            <div class="item">
                                <img src={selected.multimedia ? selected.multimedia.src : ""} alt="" />
                                <h3>{selected.display_title}</h3>
                            </div>
                        </div>
                        <div className="form confirm-form">
                            <form onSubmit={handleSubmit}>
                                <div className="">
                                    <label>Choose The Day</label>
                                    <input type="date" required value={date} onChange={(e) => changeDate(e)} id="movie-date" />
                                </div>
                                <div>
                                    <label>Choose the time</label>
                                    <input type="time" required value={time} onChange={(e) => changeTime(e)} id="movie-time" />
                                </div>
                                <div>
                                    <label>Choose the price</label>
                                    <select onChange={(e) => changePrice(e)} id="movie-price">
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
                            {cartItems.map((item) => (
                                <div class="cart-item">
                                    <img src={item.image} alt="" width="60" />
                                    <h5>{item.title}</h5>
                                    <div class="day"></div>
                                    <div class="time"></div>
                                    <div class="price">{item.price}</div>
                                    <div class="actions">
                                        <button class="del" onClick={() => deleteItem(item)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="total">
                            <h2>Total : $ <span className="value">{total}</span></h2>
                        </div>
                        <div className="clear-div">
                            <button className="clear-all" onClick={clearCart}>Clear Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
