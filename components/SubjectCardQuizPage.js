import React, { useEffect, useState } from 'react';
import Link from 'next/dist/client/link';

const SubjectCardQuizPage = ({CurrentSub}) => {




  return (
    <Link href={`/quiz/${CurrentSub}`}>
    <div className="m-3 p-2 border border-indigo-300 text-center w-[90%] md:w-[50%] text-2xl bg-gray-50 hover:bg-gray-100 cursor-pointer shadow-md">
        <h3>{CurrentSub}</h3>
    </div>
    </Link>
  )
}

export default SubjectCardQuizPage