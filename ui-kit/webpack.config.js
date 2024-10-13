const path = require("path");

module.exports = {
    mode: "production", 
    entry: "./src/index.ts", /* (исходник для обработки) */
    output: { /* (место назначения - обработанный код сохраняем в dist/index.ts) */
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd", /* (библиотека для импортов, теперь можно использовать как import так и require) */
        clean: true
    },
    resolve: { /* (разрешения - при подключениях и импортах теперь указанные можно не писать(import MyButton from "./Mybutton" - .ts не обязателен)) */
        extensions: [".ts", ".tsx"]
    },
    externals: { /* (исключаем из бандла) */
        react: "react" /* (подразумевается, что он уже установлен у конечного потребителя) */
    },
    module: {
        rules: [ /* (правила обработки модулей) */
            {
                test: /\.css/, 
                use: ["style-loader", "css-loader"],  /* (используемые лоадеры, именно в этом порядке) */
            },
            {
                test: /\.(ts|tsx)?$/, /* (названия заканчиваются на ts или tsx) */
                use: ["ts-loader"],  /* (используемые лоадеры) */
                exclude: /node_modules/ /* (исключения) */
            }
        ]
    }
} /* (запускаем командой webpack в терминале(npx webpack у меня)) */