import data from './data.json' // imports data.json

export default data // export the native JS array

const allCategories = data.map((obj)=>obj.category)

// const uniqueCategories = Array.from(new Set(allCategories))

const cats =  allCategories.reduce((acc,cat) => {
  acc[cat]=0
  return acc
},{})

const uniqueCategories = Object.keys(cats)

const categoriesAndCounts = allCategories.reduce((acc,cat) =>{
  if(acc[cat] === undefined){
    acc[cat] =1 
  } else {
    acc[cat] += 1
  }
  return acc
},{})

// Objects cant be mapped, but we can map an array
const CatsAndCounts = uniqueCategories.map((name)=>{
  return { name, count:categoriesAndCounts[name]}
})

CatsAndCounts.push({ name:'All', count:data.length})

export {
  allCategories,
  uniqueCategories,
  categoriesAndCounts,
  CatsAndCounts
}