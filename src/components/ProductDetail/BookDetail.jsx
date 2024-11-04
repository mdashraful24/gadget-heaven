import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDb";

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    // console.log(typeof data[0].bookId, typeof id, typeof bookId)

    const { bookId: currentBookId, image, bookName, author, tags, category, rating, review, totalPages, yearOfPublishing, publisher } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    const handleAddWishList = (id) => {
        addToStoredWishList(id);
    }

    return (
        <div className="my-12">
            <h2>Book Detail: {bookId}</h2>
            <div className="flex flex-col lg:flex-row items-center gap-10 justify-center p-3">
                <div className="bg-base-200 p-16 rounded-2xl">
                    <img className="w-80" src={image} alt="" />
                </div>
                <div className="p-5 lg:w-1/2 space-y-3">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">{bookName}</h2>
                        <p className="font-semibold">By: {author}</p>
                    </div>
                    <div className="border my-3"></div>
                    <p className="font-semibold">{category}</p>
                    <div className="border my-3"></div>
                    <p className="text-justify"><span className="font-bold">Review:</span> {review}</p>
                    <div className="flex items-center gap-3">
                        <p className="font-bold">Tag: </p>
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-50 text-[#23BE0A] border-none">#{tag}</button>
                            )
                        }
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
                            <p className="font-bold">{totalPages}</p>
                            <p className="font-bold">{publisher}</p>
                            <p className="font-bold">{yearOfPublishing}</p>
                            <p className="font-bold">{rating}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline border-2 border-base-300 mr-4">Mark as Read</button>
                        <button onClick={() => handleAddWishList(bookId)} className="btn bg-[#50B1C9] text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;