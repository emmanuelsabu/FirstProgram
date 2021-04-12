import axios from 'axios';

const getListings  = ()=>
{
  axios.get ('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
       .then(function(response)
       {
         alert(JSON.stringify(response.data));
       })
       .catch(function(error)
       {
         alert(error.message);
       })
       .finally(function()
       {
         alert('Finally Called');
       });
};
export default {
    getListings
};