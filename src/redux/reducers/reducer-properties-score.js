// import {GET_SCORE,ORDER_SCORE} from '../actions/constants'
// const initialState = {
//   scoreState:{},
//   filteredScore:{}
// };

// const reducerScore = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_SCORE:
//       console.log(action.payload)
//       return{
//         ...state,
//         scoreState:action.payload
//       }
    
//     case ORDER_SCORE:
//         const scoreG=state
//         console.log(state,'scoreG')
//         let mayores= scoreG.filter((num)=> num.score > 3);
//         mayores= mayores.sort(function(a,b){
//           if(b.score < a.score){
//             return -1;
//           }if(a.score > b.score){
//             return 1
//           }else{
//             return 0;
//           }
//         })
//         console.log(mayores,'mayores')
//         return{
//           ...state,
//           filteredScore:mayores
//         }
      
//       default:
//         return {
//           state,
//         }
    
//   }
// };

// export default reducerScore;
