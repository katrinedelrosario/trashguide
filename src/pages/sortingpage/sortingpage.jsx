import { useEffect, useState } from 'react';
import style from './sortingpage.module.scss'
import { useFetch } from '../../hooks/useFetch';
import bgWaves from '../../assets/images/layout/bg-waves-1.svg'
import { Sections } from '../../components/section/sectionList';
import { Title } from '../../components/title/title';
import { SearchBar } from '../../components/searchbar/searchbar';
import { Details } from '../../components/details/details';

export const Sortingpage = () => {
  //state to keep track of selected sectionCard
  const [selectedSection, setSelectedSection] = useState(null)
  //state for storing current keyword
  const [searchKeyword, setSearchKeyword] = useState('')
  // state for storing current results from search
  const [searchResults, setSearchResults] = useState(null)
  

  const allSections = useFetch('http://localhost:3000/section', [])

  //effect which triggers when searchKeyword changes
  useEffect(() => {
    if (searchKeyword) {
      //perform search + update searchResults
      fetch(`http://localhost:3000/search/${searchKeyword}`)
        .then(res => res.json())
        .then(data => setSearchResults(data))
        .catch(err => console.error(err));
    } else {
      // if keyword is empty, it resets serarchResults
      setSearchResults(null)
    }
  }, [searchKeyword])

  //updates the state of searchKeyword
  const handleSearchChange = (keyword) => {
    setSearchKeyword(keyword);
  }
  //chooses which sections to display from searchResults
  const sectionsToDisplay = searchResults ? searchResults.data : allSections

// handles section selection
  const handleSectionSelect = (id) => {
    console.log(`section selected: ${id}`);
    setSelectedSection(id);
  }
//handles closing of modal
  const handleClose = () => {
    console.log('closing details/modal');
    setSelectedSection(null);
  };
  console.log('current selectedSection state:', selectedSection)

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.searchContainer}>
          <Title
            className={style.title}
            title={
              <h2>
                Din guide
                <br />
                <span className={style.span}>til en sund affaldssortering</span>
              </h2>
            }
          />
          <div className={style.search}>
            <SearchBar onSearchChange={handleSearchChange}/>
          </div>
        </div>
 {/* section list that takes sectionsToDisplay and a selection handler */}
        <Sections sections={sectionsToDisplay} onSectionSelect={handleSectionSelect} />
{/* modal which shows when there is a selected sectionCard */}
        {selectedSection && (
          <Details
            sectionId={selectedSection}
            onClose={handleClose}
          />
        )}
      </div>
      <img src={bgWaves} className={style.wave} alt="green waves" />
    </>
  )
}
