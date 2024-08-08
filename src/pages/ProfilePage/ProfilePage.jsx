import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

function ProfilePage() {
    const [user, setUser] = useContext(AppContext)
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage