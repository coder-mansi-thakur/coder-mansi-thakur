import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.mongo_url);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("DB connected");
        });

        connection.on("error", (err) => {
            console.log("DB connect error", err);
            process.exit();
        });
    } catch (error) {
        console.log(error);
    }
}
