import React, { useState } from 'react';
import '../App.css';
import Card from './card.js';

export default function Maincard() {
  const [count, setCount] = useState(1);
  const [cardsData, setCardsData] = useState([{ text: "", number: "" }]);

  function addCard() {
    setCount(count + 1);
    setCardsData([...cardsData, { text: "", number: "" }]);
  }

  function updateCardData(index, newData) {
    const updatedCardsData = [...cardsData];
    updatedCardsData[index] = newData;
    setCardsData(updatedCardsData);
  }

  function findcon(take, give) {
    let result = {};
    for (let i in take) {
        for (let j in give) {
            if (parseFloat(take[i].slice(1)) < parseFloat(give[j].slice(1)) && take[i] !== "0") {
                if (result[j]) {
                    result[j] += `, ${i} -> ${parseFloat(take[i].slice(1))}`;
                } else {
                    result[j] = `${i} -> ${parseFloat(take[i].slice(1))}`;
                }

                give[j] = "-" + (parseFloat(give[j].slice(1)) - parseFloat(take[i].slice(1))).toString();
                take[i] = "0";
                break;
            } else if (parseFloat(take[i].slice(1)) > parseFloat(give[j].slice(1)) && take[i] !== "0") {
                if (result[j]) {
                    result[j] += `, ${i} -> ${parseFloat(give[j].slice(1))}`;
                } else {
                    result[j] = `${i} -> ${parseFloat(give[j].slice(1))}`;
                }

                take[i] = "+" + (parseFloat(take[i].slice(1)) - parseFloat(give[j].slice(1))).toString();
                give[j] = "0";
            } else {
                if (result[j]) {
                    result[j] += `, ${i} -> ${parseFloat(give[j].slice(1))}`;
                } else {
                    result[j] = `${i} -> ${parseFloat(give[j].slice(1))}`;
                }

                take[i] = "0";
                give[j] = "0";
            }
        }
    }
    console.log("Transactions:", result);
    return result;
}

function calculate() {
    const final = cardsData.map(card => ({ ...card }));
    let total = 0;
    for(let i = 0; i < final.length; i++){
      total += parseInt(final[i].number);
    }
    const payable = total / count;

    for(let i = 0; i < final.length; i++){
      if(parseFloat(final[i].number) >= payable){
        final[i].number = "+" + (parseFloat(final[i].number) - payable).toFixed(2);
      } else {
        final[i].number = "-" + (payable - parseFloat(final[i].number)).toFixed(2);
      }
    }

    const take = final
        .filter(card => card.number[0] === '+')
        .reduce((obj, card) => {
            obj[card.text] = card.number;
            return obj;
        }, {});

    const give = final
        .filter(card => card.number[0] === '-')
        .reduce((obj, card) => {
            obj[card.text] = card.number;
            return obj;
        }, {});

    const transactions = findcon(take, give);
    console.log("Final Contributions:", transactions);

    return transactions;
}



  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
      <div className="card" key={i}>
        <Card data={cardsData[i]} setCardData={(newData) => updateCardData(i, newData)} />
      </div>
    );
  }

  return (
    <>
      <div className="main-card">
        {cards}
      </div>
      <div className="add-card">
        <button onClick={addCard}>Add Card</button>
      </div>
      <div className="calculate">
        <button onClick={calculate}>Calculate</button>
      </div>
    </>
  );
}




// # js logic for prject
// data={
//     "vrusharth":"850",
//     "soham":"0",
//     "sharvesh":"100",
//     "dhrub":"1000",
// }

// def findcon(take, give):
//     data = {}
//     for i in take:
//         for j in give:
//             print(take[i], give[j], float(take[i][1::]), float(give[j][1::]))
//             if((float(take[i][1::]) < float(give[j][1::]))  and take[i] != 0):
//                 if(j in data):
//                     data[j] = data[j] + "," + i + "->" +str(float(take[i][1::]))
//                 else:
//                     data[j] = i + "->" +str(float(take[i][1::]))

//                 give[j] = "-" + str(float(give[j][1::]) - float(take[i][1::]))
//                 take[i] = 0
//                 break
//             elif((float(take[i][1::]) > float(give[j][1::]))  and take[i] != 0):
//                 if(j in data):
//                     data[j] = data[j] + "," + i + "->" + str(float(give[j][1::]))
//                 else:
//                     data[j] = i + "->" + str(float(give[j][1::]))
                
//                 take[i] = "+" + str(float(take[i][1::]) - float(give[j][1::]))
//                 give[j] = 0
            
//             else:
//                 if(j in data):
//                     data[j] = data[j] + "," + i + "->" + str(float(give[j][1::]))
//                 else:
//                     data[j] = i + "->" + str(float(give[j][1::]))
                
//                 take[i] = 0
//                 give[j] = 0



//     print(take, give, data)
            
// def soham(data):
//     ans = data.copy()
//     total = 0
//     for key in data:
//         total = total + int(data[key])
//     payable = total/len(data)
//     for key in ans:
//         if(float(ans[key]) >= payable):
//             ans[key] = "+" + str(float(ans[key]) - payable) 
//         else:
//             ans[key] = "-" + str(payable - float(ans[key])) 
//     ans = dict(sorted(ans.items(), key=lambda item: item[1]))

//     take = {k: v for k, v in ans.items() if v[0] == '+'}
//     give = {k: v for k, v in ans.items() if v[0] == '-'}

//     findcon(take, give)
//     return ans
