import DialogueComponent from "@/components/dialag";

const DialogPage = ({params}:{params:{slug:number}}) => {
    return (<div>
        <DialogueComponent id={params.slug}/>
    </div>  );
}
 
export default DialogPage;