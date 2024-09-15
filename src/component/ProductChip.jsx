

function ProductChip({ category, isChoose , onClick}) {

    const { name } = category;
    return (
        <div 
        onClick={onClick}
        className={`${isChoose ? 'bg-purple-500 text-white' : "bg-white text-black"} 
         p-1 px-2 
        cursor-pointer
        hover:bg-purple-200
        border-purple-400 border rounded-md`}>
            
            <h1 >{name}</h1>
        </div>)

}


export default ProductChip;