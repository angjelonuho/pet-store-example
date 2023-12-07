import AppText from "./AppText"
import './FilterResultCard.css'

const FilterResultCard = ({ image, caption }) => {

  return (
    <figure className="filter-result-card">
      <div className="image-container">
        <img src={image} alt="Pet image" />
      </div>
      <figcaption className="container">
        <AppText variant='h3'>{caption}</AppText>
      </figcaption>
    </figure>
  )
}

export default FilterResultCard