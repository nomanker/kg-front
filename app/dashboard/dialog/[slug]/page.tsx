import DialogueComponent from "@/components/dialogue";

const DialogPage = ({params}:{params:{slug:number}}) => {
    return (<div>
        <DialogueComponent id={params.slug}/>
    </div>  );
}
 
export default DialogPage;