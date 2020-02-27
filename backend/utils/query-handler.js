/*
* Real time private chatting app using Angular 2, Nodejs, mongodb and Socket.io
* @author Shashank Tiwari
*/

'use strict';
class QueryHandler{

	constructor(){
		// this.Mongodb = require("./../config/db");
	}

	userNameCheck(data){
		return new Promise( async (resolve, reject) => {
			try {
				const [DB, ObjectID] = await this.Mongodb.onConnect();
				DB.collection('users').find(data).count( (error, result) => {
					DB.close();
					if( error ){
						reject(error);
					}
					resolve(result);
				});
			} catch (error) {
				reject(error)
			}
		});
	}

	getUserByUsername(username){
		return new Promise( async (resolve, reject) => {
			try {
				const [DB, ObjectID] = await this.Mongodb.onConnect();
				DB.collection('users').find({
					username :  username
				}).toArray( (error, result) => {
					DB.close();
					if( error ){
						reject(error);
					}
					resolve(result[0]);
				});
			} catch (error) {
				reject(error)
			}
		});
	}

	makeUserOnline(userId){
		return new Promise( async (resolve, reject) => {
			try {
				const [DB, ObjectID] = await this.Mongodb.onConnect();
				DB.collection('users').findAndModify({
					_id : ObjectID(userId)
				},[],{ "$set": {'online': 'Y'} },{new: true, upsert: true}, (err, result) => {
					DB.close();
					if( err ){
						reject(err);
					}
					resolve(result.value);
				});
			} catch (error) {
				reject(error)
			}
		});
	}

	registerUser(data){
		return new Promise( async (resolve, reject) => {
			try {
				const [DB, ObjectID] = await this.Mongodb.onConnect();
				DB.collection('users').insertOne(data, (err, result) =>{
					DB.close();
					if( err ){
						reject(err);
					}
					resolve(result);
				});
			} catch (error) {
				reject(error)
			}
		});
	}

	userSessionCheck(data){
		return new Promise( async (resolve, reject) => {
			try {
				const [DB, ObjectID] = await this.Mongodb.onConnect();
				DB.collection('users').findOne( { _id : ObjectID(data.userId) , online : 'Y'}, (err, result) => {
					DB.close();
					if( err ){
						reject(err);
					}
					resolve(result);
				});
			} catch (error) {
				reject(error)
			}
		});
	}

	getUserInfo({userId,socketId = false}){
		let queryProjection = null;
		if(socketId){
			queryProjection = {
				"socketId" : true
			}
		} else {
			queryProjection = {
				"username" : true,
				"online" : true,
				'_id': false,
				'id': '$_id'
			}
    }

    let selectQ = `select * from user where id = ${userId}`;
    return new Promise( async (resolve, reject) => {
      db.query(selectQ, function(err, rows, fields) {
        resolve(rows);
      });
		});
	}

	addSocketId({userId, socketId}){
    let update = `UPDATE user set is_active = true, socket_id = '${socketId}' where id = ${userId}`;
		return new Promise( async (resolve, reject) => {
      db.query(update, function(err, rows, fields) {
        resolve(rows);
      });
		});
	}

	getChatList(userId){
		return new Promise( async (resolve, reject) => {
			try {
				const [DB, ObjectID] = await this.Mongodb.onConnect();
				DB.collection('users').aggregate([{
					$match: {
						'socketId': { $ne : userId}
					}
				},{
					$project:{
						"username" : true,
						"online" : true,
						'_id': false,
						'id': '$_id'
					}
				}
				]).toArray( (err, result) => {
					DB.close();
					if( err ){
						reject(err);
					}
					resolve(result);
				});
			} catch (error) {
				reject(error)
			}
		});
	}

	insertMessages(messagePacket){
    let insertQuery = `INSERT INTO messages (from_user_id, to_user_id, message) values (${messagePacket.fromUserId}, ${messagePacket.toUserId}, '${messagePacket.message}')`;
    return new Promise( async (resolve, reject) => {
      db.query(insertQuery, function(err, rows, fields) {
        resolve(rows);
      });
		});
	}

	getMessages({userId, toUserId}){

    let selectQuery = `select * from messages where (to_user_id = ${userId} and from_user_id = ${toUserId}) or (to_user_id = ${toUserId} and from_user_id = ${userId}) order by id`;
		return new Promise( async (resolve, reject) => {
      db.query(selectQuery, function(err, rows, fields) {
        resolve(rows);
      });
		});
	}

	logout(userID,isSocketId){
		const data = {
			$set :{
				online : 'N'
			}
		};
		return new Promise( async (resolve, reject) => {
			try {
				const [DB, ObjectID] = await this.Mongodb.onConnect();
				let condition = {};
				if (isSocketId) {
					condition.socketId = userID;
				}else{
					condition._id = ObjectID(userID);
				}
				DB.collection('users').update( condition, data ,(err, result) => {
					DB.close();
					if( err ){
						reject(err);
					}
					resolve(result);
				});
			} catch (error) {
				reject(error)
			}
		});
	}
}

module.exports = new QueryHandler();
