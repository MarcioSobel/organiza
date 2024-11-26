

export const CardReceita = () => {
  return (
    <div className="card bg-neutral text-neutral-content w-96 h-24 bg-off-white p-2 rounded-lg border border-off-black hover:boerder-r-2 hover:border-b-2">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Accept</button>
      <button className="btn btn-ghost">Deny</button>
    </div>
  </div>
</div>
  )
}
