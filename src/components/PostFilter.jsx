import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({ filter, setFilter }) {


  return (
    <div className='box-search' >
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Сoртитровка по :'
        options={[
          { value: 'title', name: 'По заголовку' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
      <MyInput
        placeholder='Поиск...'
        value={filter.query}
        onChange={event => setFilter({ ...filter, query: event.target.value })}
      />
    </div>
  )
}

export default PostFilter;