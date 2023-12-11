import React from 'react'

function Paginetion({ page, lastPage, setPage }) {

    //scrollTO() = berguna untuk menuju ke atas halaman 
    const scrollTop =()=>{
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const hendleNextPage = () => {
        setPage((nextState)=> nextState + 1 )
        scrollTop()
    };

     const hendlePrevPage = () => {
       setPage((prevState) => prevState + 1);
        scrollTop();
     };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      {page <= 1 ? null : (
        <button
          onClick={hendlePrevPage}
          className="transition-all hover:text-color-accent"
        >
          Prev
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={hendleNextPage}
          className="transition-all hover:text-color-accent"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Paginetion