import React from 'react'
import Cards from '../components/Cards'

const Images={
    
        image1:'./mohan.jpeg',
        image2:'./anile1.jpeg',
        image3:'./sudheer.jpeg',
        image4:'./vineeth.jpeg',

    

}

const names={
    name1:"mohan",
    name2:"anile",
    name3:"sudheer",
    name4:"vineeth",
    name5:"sai",

    
}


const designations={
    role1: 'React Developer',
    role2: 'Angular Developer',
    role3: 'SAP Securities Consultant',
    role4: 'UI/UX Designer'
}

const description={
    description1: 'Mohan is a skilled React developer with 2 years of experience in building dynamic web applications.',
    description2: 'Anile specializes in Angular development and has a strong background in front-end technologies.',
    description3: 'Sudheer is an expert in SAP securities, helping businesses secure their SAP environments effectively.',
    description4: 'Vineeth is a creative UI/UX designer with a passion for creating intuitive and user-friendly designs.'

}

 
 

const Team = () => {
  return (
    <div className='grid grid-cols-3 m-4'>

 
       
        
        <Cards profile={Images.image2}  names={names.name2} designation={designations.role2} description={description.description2}/>
        <Cards profile={Images.image3}  names={names.name3} designation={designations.role3} description={description.description3}/>
        <Cards profile={Images.image4}  names={names.name4} designation={designations.role4} description={description.description4}/>
        <Cards profile={Images.image1}  names={names.name1} designation={designations.role1} description={description.description1}/>
        
    </div>
  )
}

export default Team