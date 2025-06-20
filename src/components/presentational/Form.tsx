


export const Form = () => {
  return (
    <div>
        <form className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <input type="text" className="lg:max-w-[339px] w-full" placeholder="Enter your email" />
            <button type="submit" className="btn">Lets Talks</button>
        </form>
    </div>
  )
}
