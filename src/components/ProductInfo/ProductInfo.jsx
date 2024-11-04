const ProductInfo = () => {
    return (
        <div className='border p-4 rounded-3xl relative bottom-36 w-9/12 mx-auto bg-white'>
            <div className="p-3">
                <div className="flex flex-col lg:flex-row items-center gap-10 justify-center p-3">
                    <div className="bg-base-200 lg:p-16 rounded-2xl">
                        <img className="w-80" src='' alt="img" />
                    </div>
                    <div className="p-5 lg:w-1/2 space-y-3">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold">{ }</h2>
                            <p className="font-semibold">By: { }</p>
                        </div>
                        <div className="border my-3"></div>
                        <p className="font-semibold">{ }</p>
                        <div className="border my-3"></div>
                        <p className="text-justify"><span className="font-bold">Review:</span> { }</p>
                        <div className="flex items-center gap-3">
                            <p className="font-bold">Tag: </p>
                            {/* {
                                tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-50 text-[#23BE0A] border-none">#{tag}</button>
                                )
                            } */}
                        </div>
                        <div className="border my-3"></div>
                        <div className="flex items-center gap-14">
                            <div className="space-y-2">
                                <p>Number of Pages:</p>
                                <p>Publisher:</p>
                                <p>Year of Publishing:</p>
                                <p>Rating:</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-bold">{ }</p>
                                <p className="font-bold">{ }</p>
                                <p className="font-bold">{ }</p>
                                <p className="font-bold">{ }</p>
                            </div>
                        </div>
                        <div>
                            {/* <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline border-2 border-base-300 mr-4">Mark as Read</button>
                            <button onClick={() => handleAddWishList(bookId)} className="btn bg-[#50B1C9] text-white">Wishlist</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;