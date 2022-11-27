import React, { useEffect, useState } from 'react';
import SpinerLoader from './SpinerLoader';

const PaginatedTable = ({ children, data, dataInfo, additionalField, numOfPages, searchParams, loading }) => {

    const [initData, setInitData] = useState(data)
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [seacrhChart, setSearchChart] = useState("");

    useEffect(() => {
        let pCount = Math.ceil(initData.length / numOfPages);
        setPageCount(pCount);
        let pArry = []
        for (let i = 1; i <= pCount; i++) pArry = [...pArry, i];
        setPages(pArry);
    }, [initData])

    useEffect(() => {
        let start = (currentPage * numOfPages) - numOfPages
        let end = (currentPage * numOfPages)
        setTableData(initData.slice(start, end))
    }, [currentPage, initData])

    useEffect(() => {
        setInitData(data.filter(d => d[searchParams.searchField].includes(seacrhChart)));
        setCurrentPage(1);
    }, [seacrhChart, data])

    return (
        <>
            <div className="row justify-content-between">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="input-group mb-3 dir_ltr">
                        <input
                            type="text"
                            className="form-control"
                            placeholder={searchParams.placeholder}
                            onChange={(e) => setSearchChart(e.target.value)}
                        />
                        <span className="input-group-text" >{searchParams.title}</span>
                    </div>
                </div>
                <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                    {children}
                </div>
            </div>
            <div>
                {
                    loading ? (
                        <SpinerLoader colorclass={'text-primary'} />
                    ) : data.length ? (
                        <table className="table table-responsive text-center table-hover table-bordered">
                            <thead className="table-secondary">
                                <tr>
                                    {dataInfo.map(i => (
                                        <th key={i.field} >{i.title}</th>
                                    ))}
                                    {
                                        additionalField ? additionalField.map((a, index) => (
                                            <th key={a.id + "__" + index} >{a.title}</th>
                                        )) : null
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map(d => (
                                    <tr key={d.id} >
                                        {dataInfo.map(i => (
                                            <th key={i.field + "_" + d.id} >{d[i.field]}</th>
                                        ))}
                                        {
                                            additionalField ? additionalField.map((a, index) => (
                                                <td key={a.id + "_" + index} >{a.elements(d)}</td>
                                            )) : null
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <h4 className='text-center text-danger' >هیچ دسته بندی یافت نشد</h4>
                    )
                }
                {
                    pages.length > 1 ? (
                        <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                            <ul className="pagination dir_ltr">
                                <li className="page-item">
                                    <span className={`page-link pointer ${currentPage == 1 ? "disable" : ""}`}
                                        aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)}>
                                        <span aria-hidden="true">&raquo;</span>
                                    </span>
                                </li>
                                {
                                    pages.map(page => (
                                        <li className="page-item pointer" key={page}>
                                            <span className={`page-link ${currentPage == page ? "alert-success" : ""}`} onClick={() => setCurrentPage(page)}>
                                                {page}
                                            </span>
                                        </li>
                                    ))
                                }

                                <li className="page-item">
                                    <span className={`page-link pointer ${currentPage == pageCount ? "disable" : ""}`}
                                        aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)}>
                                        <span aria-hidden="true">&laquo;</span>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    ) : null
                }
            </div>
        </>
    );
}

export default PaginatedTable;