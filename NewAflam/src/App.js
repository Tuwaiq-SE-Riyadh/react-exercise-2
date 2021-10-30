import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MovieList from './components/MovieList';
import { useState } from 'react';





function App() {
  const [search, setSearch] = useState("")
  const [cartItems, setCartItems] = useState([]);
  const [selected, setSelected] = useState("")
  let [total, setTotal] = useState(0);
  const [opened, setOpened] = useState(false)

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [price, setPrice] = useState(0)

  const [cartItem, setCartItem] = useState({
    id: "",
    title: "",
    image: "",
    price: 0,
    date: "",
    time: ""
  })

  const changeDate = (e) => {
    setDate(e.target.value)
  }
  const changeTime = (e) => {
    setTime(e.target.value)
  }
  const changePrice = (e) => {
    setPrice(parseInt(e.target.value))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setCartItem({
      title: selected.display_title,
      image: selected.multimedia.src,
      date: date,
      price: price,
      time: time
    })
    setTotal(total += price)
    setCartItems([...cartItems, cartItem])

  }

  const deleteItem = (item) => {
    setCartItems(cartItems.filter(x => x !== item))
    setTotal(total -= item.price)
  }
  const clearCart = () => {
    setCartItems([])
    setTotal(0)
  }

  const toggleOpen = () => {
    setOpened(!opened)
  }

  const addProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const selectProduct = (product) => {
    setSelected(product)
    toggleOpen()
  }

  let change = (e) => {
    setSearch(e.target.value)
  }



  return (
    <div className="App">
      <Home cartItems={cartItems} toggleOpen={toggleOpen} deleteItem={deleteItem} handleSubmit={handleSubmit} opened={opened} addProduct={addProduct} clearCart={clearCart} date={date} changeDate={changeDate} time={time} changeTime={changeTime} price={price} changePrice={changePrice} total={total} selected={selected} />
      <Header />
      <section className="movies">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" onChange={change} placeholder="Search for movies . . ." />
          {/* <button onClick>Search</button> */}
        </form>
        <div className="list-head">
          <h2>Popular Movies</h2>
          <button>View More</button>
        </div>
        <div id="movie-list1" className="movie-list">
          <MovieList text={search} selectProduct={selectProduct} />
        </div>
        <div className="list-head">
          <h2>Now Playing Movies</h2>
          <button>View More</button>
        </div>
        <div id="movie-list2" className="movie-list">
          <MovieList text="sup" selectProduct={selectProduct} />
        </div>
      </section>
      <Footer />
    </div>

  );
}

export default App;
