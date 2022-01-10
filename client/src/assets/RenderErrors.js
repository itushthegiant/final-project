export const renderErrors = (errors, title) => {
    return errors.map((err, i) => {
        const firstWord = err.split(' ')[0]
        if (firstWord === title) {
            return <p key={i} className='text-red-600 text-sm'>* {err}</p>
        } else {
            return null
        }
    })
}