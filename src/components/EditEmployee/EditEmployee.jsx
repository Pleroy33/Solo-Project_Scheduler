function EditEmployee() {
    useEffect(()=> {
        dispatch({
            type:'GET_ONE_EMPLOYEE'})
    },[])

    // return (
    //     <>
    //     <div className='Edit-employee'>
    //            <header className='add-employee-header'>
    //             <h1>Edit Empliyee</h1>
    //            </header>
    //         <div className='Employee-form'>
    //             <form onSubmit={handleSubmit}>
    //                 <input type="text" placeholder='First Name' value={} onChange={(event)=> setInput({...input, first_name: event.target.value})} />
    //                 <input type="text" placeholder='Last Name' value={} onChange={(event) => setInput({...input, last_name: event.target.value})} />
    //                 <input type="text" placeholder='Employee Notes' value={input.notes} onChange={(event) => setInput({...input, notes: event.target.value})}/>

    //                 <button type ='submit'>Accept</button>
    //             </form>
    //         </div>
    //         </>
    // )
    // }
