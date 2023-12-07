import './PetFilter.css';
import useFetch from '../hooks/useFetch'

import AppText from '../components/AppText';
import AppPageContainer from '../components/AppPageContainer';
import FilterCategoryCard from '../components/FilterCategoryCard';
import FilterSearch from '../components/FilterSearch';
import FilterResultCard from '../components/FilterResultCard';

const categories = [
  { name: 'All pets', icon: 'heart' },
  { name: 'Location specific', icon: 'pin' },
  { name: 'Age specific', icon: 'clock' },
  { name: 'Available now', icon: 'confettie' },
  { name: 'For small or big homes', icon: 'home' },
];

const PetFilter = () => {

  // TODO: Save it in the environment variables
  const { data, isLoading, error } = useFetch(
    'https://634e71874af5fdff3a5c61ba.mockapi.io/api/v1/pets'
  );

  const mapCategoriesToCards = () => {
    return categories.map((category, index) => (
      <FilterCategoryCard key={index} category={category.name} icon={category.icon} />
    ));
  };

  const mapPetResultsToCards = () => {
    const firstThreeResults = data.slice(0, 3);
    return firstThreeResults.map((pet, index) => (
      <FilterResultCard key={index} image={pet.photoUrl} caption={pet.name} />
    ));
  }

  return (
    <AppPageContainer>
      <AppText variant="h1" align="center">Pets</AppText>

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <FilterSearch data={data ?? []} placeholder="Search for pets" />
          <AppText variant="h2" align="center">Results</AppText>
          <div className="pet-results">
            {mapPetResultsToCards()}
          </div>
        </>
      )}

      <AppText variant="h2" align="center">Categories</AppText>

      <div className="categories">
        {mapCategoriesToCards()}
      </div>
    </AppPageContainer>
  );
};

export default PetFilter;
