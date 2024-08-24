import React, { useState } from 'react';
import StudentForm from './StudentForm';

function Home({ mentors, onSubmit }) {
  const [selectedArea, setSelectedArea] = useState('');
    
  const handleAreaChange = (area) => {
    setSelectedArea(area);
  };

  const filteredMentors = selectedArea
    ? mentors.filter(mentor => mentor.areas_of_expertise.includes(selectedArea))
    : mentors;

  return (
    <div>
     
      <StudentForm 
        mentors={filteredMentors} 
        onAreaChange={handleAreaChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Home;