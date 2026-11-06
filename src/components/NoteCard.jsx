function NoteCard({ title, body }) {
  return (
    <div>
      <h3 className="pr-8 text-[22px] font-normal break-words">{title}</h3>
      <p className="mt-3 text-[17px] break-words whitespace-pre-wrap text-[#4d4d4d]">
        {body}
      </p>
    </div>
  )
}
 
export default NoteCard
