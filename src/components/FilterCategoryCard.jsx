import './FilterCategoryCard.css'
import AppText from './AppText'

const FilterCategoryCard = ({ category, icon }) => {

  const iconPath = `icons/${icon}.svg`

  return (
    <div className="category-card">
      <figure className='category-card-figure'>
        <img className='category-card-img' src={iconPath} alt='categories icon' />
      </figure>
      <AppText className='category-card-text' variant='h4'>{category}</AppText>
    </div>

  )
}

export default FilterCategoryCard