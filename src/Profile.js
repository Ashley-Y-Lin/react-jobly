import React from "react";
import ProfileForm from "./ProfileForm";

/** Profile renders the page for /profile
 *
 * Prop
 * - update: func from parent, passed to ProfileForm
 *
 * JoblyRoutes => Profile => ProfileForm
 */

function Profile({ update }) {
  return (
    <div className="Profile m-2">
      <h2>Update profile</h2>
      <ProfileForm onSubmit={update} />
    </div>
  );
}

export default Profile;