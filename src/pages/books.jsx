import { useEffect, useState } from "react";
import { fetchAllBookAPI, fetchAllUserAPI } from "../services/api.service";
import BookForm from "../components/book/book.form";
import BookTable from "../components/book/book.table";

const BookPage = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    const [dataBooks, setDataBooks] = useState([]);
    useEffect(() => {
        loadBook();
    }, [current, pageSize])
    const loadBook = async () => {
        const res = await fetchAllBookAPI(current, pageSize)
        if (res.data) {
            setCurrent(res.data.meta.page)
            setPageSize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)
            setDataBooks(res.data.result) // vẽ ra giao diện

        }
    }
    return (
        <div>
            <BookForm loadBook={loadBook} />
            <BookTable
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
                dataBooks={dataBooks}
                loadBook={loadBook}
            />
        </div>
    )
}
export default BookPage;