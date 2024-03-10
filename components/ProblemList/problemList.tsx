import moment from "moment";
import React, { useEffect, useState } from "react";


export default function ProblemList({ data = [] }) {

  const [openModalData, setOpenModalData] = useState<any>(null)
  console.log("🚀 ~ ProblemList ~ openModalData:", openModalData)

  const quesClickHandler = (record: any) => {
    setOpenModalData(record)
  }

  const columns = [
    { title: '#', name: 'index', render: (_: any, index: number) => index },
    {
      title: 'PROBLEM NAME	', name: 'ques', render: (value: any, index: any, record: any) => {
        return (
          <a onClick={() => quesClickHandler(record)}>{value}</a>
        )
      }
    },
    { title: 'TAG', name: 'tag' },
    { title: 'LAST COMPLETED	', name: 'updatedAt', render: (value: string) => moment(value).format('DD/MM/YYY') },
    { title: 'Avg. Score	', name: 'easinessFactor' },
  ]
  return (
    <div className='relative'>
      {
        openModalData
          ? (
            <div className='absolute h-screen w-screen bg-transparent p-12'>
              <div className='h-100'>
                {openModalData.ques}
              </div>
            </div>
          )
          : null
      }
      <table>
        <thead>
          <tr>

            {
              columns.map(({ title }) => {
                return (
                  <th
                    className='border-spacing-4 p-4 font-normal'
                    key={title}
                  >
                    {title}
                  </th>
                )
              })
            }
          </tr>

        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={JSON.stringify(item)}>
                  {columns.map(({ name, render }) => {
                    return (
                      <td key={name}>{render ? render(item[name], index + 1, item) : item[name]}</td>
                    )
                  })}
                </tr>

              )
            })

          }
        </tbody>
      </table>
    </div>
  )
}