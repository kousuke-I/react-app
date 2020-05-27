import React, { useState, useEffect } from 'react';

const Booklist = props =>{
  const [bookData,setBookData] = useState(null);
  useEffect(() => {
    const result = props.getData?.(props.language).then(response => setBookData(response));  //`?`を使えることで、getDataが存在する場合のみ関数を実行できる
  }, [props]) 
  return(
    <div>
        <ul>
          {
            bookData === null
            ? <p>now loading...</p>
            : bookData.data.items.map((x, index) => <li key={index}>{x.volumeInfo.title}</li>)
          }
        </ul>
    </div>
  );
}

export default Booklist;