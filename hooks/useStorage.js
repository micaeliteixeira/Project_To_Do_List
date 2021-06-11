import React from 'react'

const useStorage = (key) => {

    function addSingleData(data){
			const oldValue = getData()
			const newValue = oldValue.concat(data)
			const value = JSON.stringify(newValue)
    }

		function addData(){
			localStorage.setItem(key, value)
		}

    function getData(){
      try{     
        const data = JSON.parse(localStorage.getItem(key))
        return (data || [])  
      }catch(err){
				console.error(err)
      }
   
    }   

   return {getData, addSingleData, addData}
}

export default useStorage
