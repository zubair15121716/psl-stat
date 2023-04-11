export const Pslchamp = {
    getchamp() {
        return [
            {
                id:"1",
                year:"2015/16",	
                team:"Islamabad United"
            },
            {
                id:"2",
                year:"2016/17",	
                team:"Peshawar Zalmi"
            },
            {
                id:"3",
                year:"2017/18	",	
                team:"Islamabad United	"
            },
            {
                id:"4",
                year:"2018/19",	
                team:"Quetta Gladiator"
            },
            {
                id:"5",
                year:"2019/20",	
                team:"Karachi Kings"
            },
            {
                id:"6",
                year:"2020/21",	
                team:"Multan Sultans"
            },
            {
                id:"7",
                year:"2021/22",	
                team:"Lahore Qalandars"
            },
            {
                id:"8",
                year:"2022/23",	
                team:"Lahore Qalandars"
            },
        ]
    },
    getdata() {
        return Promise.resolve(this.getchamp());
    }

}

	