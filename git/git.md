纪录片《出路》
马克思曾说：每一个人的发展取决于和他直接和间接进行交往的其他人的发展。
1.家庭；2.学校；3.儿童所在的集体；4.儿童本人；5.书籍；6.偶然出现的因素。

自我表达是很奢侈的东西，你不能一边追求完全自我表达，一边强行要求市场为你的自我表达买单，否则这世界就乱套了。

git init
git add 
git commit -m "fixbug"


git status                   是否修改
git diff                     查看修改内容
git log (--pretty=online)    提交历史记录
git reflog                   命令历史记录

HEAD表示当前版本号  HEAD指针  根据commit id来定位
git reset --hard HEAD^ 上个版本
                 HEAD^^ 上上个版本
                 HEAD~100 上100个版本

git checkout --[filename]   丢弃工作区的修改
一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

git reset HEAD file   把暂存区的修改撤销掉（unstage），重新放回工作区

工作区
版本库   .git隐藏目录    stage   暂存区
                         master  第一个分支（默认分支） HEAD指针指向master


场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。

场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD file，就回到了场景1，第二步按场景1操作。

场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。


工作区              暂存区      版本库
working directory   stage       repository
git add                             : working directory => stage
git commit -m "your changes commit" : stage             => repository 
git push -u origin master           : repository        => internet 

git checkout --filename   撤销工作区的修改
git add filename    ①git reset HEAD filename  ②git checkout --filename


需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。

每次修改，如果不add到暂存区，那就不会加入到commit中。

git checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。

命令git rm用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，通过git checkout -- filename 实现,但是要小心，你只能恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。


https协议 ：速度慢， 每次都要输入口令 
ssh支持的原生git协议 ：方便

①先有本地库，再将本地库上的仓库关联到远程仓库方法：
git remote add origin address 关联一个远程库
git push -u origin master  把当前分支master第一次推送到远程分支， -u作用是将本地master分支将远程master分支相关联起来 此后，就可以只输入
git push origin master 

②在远程库上创建项目，直接从远程仓库上克隆下来，修改完之后再推送

HEAD指向master分支，即当前分支，master分支指向最新的提交点
master分支是一条线，创建一条新的分支dev，
当dev分支上的任务完成时，就可以将dev分支与master分支合并，①将master指向dev的当前提交

合并分支的实质就是该指针方向，工作区的内容不变 

git checkout -b dev  创建并切换到dev分支
=> git branch dev  创建一个dev新分支
   git checkout dev 将HEAD指针指向新创建的dev分支

git branch 查看当前分支 ：列出所有分支，并在当前分支之前加*
   * dev
     master

将dev分支修改的内容完成之后
git add file    将文件加到暂存区
git commit -m "describe the commit"  将文件提交到仓库并添加描述信息

git checkout master 把HEAD从dev分支切换回master分支

git merge dev 合并指定分支dev内容到当前分支。 
	fast-forword 快进模式 实质是将master的指针指向dev分支。（但是当两分支都有提交的时候就可能会有bug）

git branch -d dev 将dev分支删除 


git branch 查看分支
git branch name 创建分支
git checkout branch 切换分支
git checkout -b name 创建并切换分支
git merge name 将指定分支合并到当前分支
git branch -d name 删除指定分支

feature 功能点，系统的最小应用 XX时间XX地点XX人物做了XX操作，系统会有XX响应

git checkout -b feature1 创建一个新的feature分支并切换到该分支

git log --graph  查看分支合并图
当git无法自动合并时，解决冲突后，再提交

master  稳定版本 仅用来发布新版本，平时不能再上面干活
dev     是开发分支，不稳定，稳定后合并到master分支上。
每个人都有自己的分支，时不时的往dev分支上合并就行了。
issue-101  bug分支（预计完成时间1天，修复bug2小时）
git stash 把当前工作现场储存起来，等以后恢复现场后继续工作
git stash apply 恢复工作现场 但是stash保存的内容不删除，git stash drop
git stash pop 恢复的同时stash保存内容删除

stash 可以多次使用 （小tips） 
git stash list 查看stash列表
git stash apply stash@{0}  调用stash列表指定工作现场语法

修复bug操作指令
①git stash

②git checkout master
  git merge --no-ff -m "merged bug fix 101" issue-101 禁用Fast forward模式 --no-ff合并时创建新的commit信息
  git branch -d issue-101

③git checkout dev
  git stash pop

操作标签

git push origin tagname<v1.0>  推送本地标签
git push origin --tags    推送全部未推送过的本地标签
git tag -d tagname 推送本地标签
git push origin :refs/tags/tagname 删除一个远程标签



大公司静态资源优化方案
配置超长时间的本地缓存                 —— 节省带宽，提高性能
采用内容摘要作为缓存更新依据      —— 精确的缓存控制
静态资源CDN部署                           —— 优化网络请求
更资源发布路径实现非覆盖式发布  —— 平滑升级

