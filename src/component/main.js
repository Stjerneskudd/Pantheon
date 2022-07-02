const { useState, useEffect } = React
const { Collapse } = bootstrap

function CollapseDemo() {
    var [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        var myCollapse = document.getElementById('collapseTarget')
        var bsCollapse = new Collapse(myCollapse, {toggle: false})
        toggle ? bsCollapse.show() : bsCollapse.hide()
    })

  return (
    <div className="py-2">
        <button className="btn btn-primary" onClick={() => setToggle(toggle => !toggle)}>
            Toggle collapse
        </button>
        <div className="collapse" id="collapseTarget">
            This is the toggle-able content!
        </div>
    </div>
  )
}

function App() {

  const [mounted, setMounted] = useState(true);

  return (
    <div className="container py-4">
        <h3>Bootstrap 5 Collapse with React</h3>
        {mounted &&
            <div>
                <CollapseDemo/>
            </div>
        }
    </div>
  )
  
}

ReactDOM.render(<App/>, document.querySelector('#root'))
