import Auth from "./Auth";



export default function Header() {
  return (
    <div className="box">
      <h1 className="text-3xl font-mono m-1 mb-4">Authentication</h1>
      <p
        className="font-mono"
        style={{ fontSize: '20px' }}>Practicing</p>
      <Auth />

    </div>
  )
}
