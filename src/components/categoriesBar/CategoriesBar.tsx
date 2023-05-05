import React from 'react'
import "./_categoriesBar.scss"

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
]

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = React.useState('All');

  const handleClick = (value: any) => {
    setActiveElement(value)
  }
  
  return (
    <div className='categoriesBar'>
      {
        keywords.map((value, i) => (
          <span
           onClick={()=> handleClick(value)}
           key={i} 
           className={activeElement === value ? 'active' : ''}
          //  className="category__bar__item"
           >
            {value}
          </span>
        ))
      }

    </div>
  )
}

export default CategoriesBar