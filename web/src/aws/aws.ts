import {GetObjectCommand, PutObjectCommand, S3Client} from '@aws-sdk/client-s3'
import {getSignedUrl} from "@aws-sdk/s3-request-presigner"
const s3Client = new S3Client({
    region: 'ap-south-1' ,
    credentials:{
        accessKeyId: process.env.ACCESS_KEY || '',
        secretAccessKey: process.env.SECRET_KEY || ''
    }
})

// export async function getObjectUrl(key:any){
//     const command = new GetObjectCommand({
//         Bucket: process.env.BUCKET ,
//         Key: key 
//     })
//     const url = await getSignedUrl(s3Client ,command)
//     return url
// }

export async function putObject(filename: string , contentType: string){
    const command = new PutObjectCommand({
        Bucket: process.env.BUCKET,
        Key : `${filename}`,
        ContentType: contentType
    })
    const url = await getSignedUrl(s3Client , command)
    return url
}