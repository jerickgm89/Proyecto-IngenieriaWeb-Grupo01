import { useState, useEffect } from "react"


export default function TableUserList() {
    return(
        <>
            <div className="col-span-10">
                <div className="bg-slate-300 my-8 mx-4 p-1 rounded-md min-h-full">
                    <div className="mx-auto w-full text-center p-5">
                        <div className="md:px-32 py-8 w-full">
                            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                </tr>
                                </thead>
                            <tbody className="text-gray-700">
                                        <tr>
                                            <td className="w-1/3 text-left py-3 px-4">Jorge</td>
                                            <td className="w-1/3 text-left py-3 px-4">Garcia</td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                        </tr>
                                
                            </tbody>
                            </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>   
        </>
    )
}