# django_react

python -m pip install django  -i  https://pypi.tuna.tsinghua.edu.cn/simple/ 
\
\

python -m pip install   psutil -i   https://pypi.tuna.tsinghua.edu.cn/simple

corsheaders

python -m pip install   corsheaders -i  https://pypi.tuna.tsinghua.edu.cn/simple


ModuleNotFoundError: No module named 'corsheaders'

OSError: [WinError 123] 文件名、目录名或卷标语法不正确。: '<frozen importlib._bootstrap>'

python -m pip  install django-cors-headers   -i  https://pypi.tuna.tsinghua.edu.cn/simple

Code the Best> Blog> Python Package Errors> Modulenotfounderror: no module named corsheaders ( Solved )
Python Package Errors
Modulenotfounderror: no module named corsheaders ( Solved )
Posted by
By
Code The Best
3 Min Read
Contents
What is ModuleNotFoundError ?
What is the cause of Modulenotfounderror: no module named corsheaders
Solution for the no module named corsheaders Error
Corsheaders is an application of Django for handling the server headers required for Cross-Origin Resource Sharing (CORS). If you are getting the error Modulenotfounderror: no module named corsheaders then this post is for you. In this entire tutorial, you will learn how to solve the issue of Modulenotfounderror: no module named corsheaders in a simple way.

What is ModuleNotFoundError ?
Many of the beginners are unable to know the cause of the error ModuleNotFoundError. This type of error mostly comes when you have not properly installed the specific package in your system. Let’s take an example. Suppose you want to use a python package A then if you are using or importing it in your code without installing it then you will get the error Modulenotfounderror: no module named ‘X’. The python interpreter is telling you that you have to install the package in your system before importing it.

What is the cause of Modulenotfounderror: no module named corsheaders
The cause for the problem of the error Modulenotfounderror: no module named corsheaders can be many reasons. But the most obvious reasons are that the django-cors-headers must be corrupt if you have already installed it in your system or you have not installed it in your system. But when you are importing it to use in your code then you will get the error.

Traceback (most recent call last):
File "manage.py", line 10, in 
execute_from_command_line(sys.argv)
File "/usr/local/lib/python2.7/dist-packages/django/core/management/__init__.py", line 399, in execute_from_command_line
utility.execute()
File "/usr/local/lib/python2.7/dist-packages/django/core/management/__init__.py", line 392, in execute
self.fetch_command(subcommand).run_from_argv(self.argv)
File "/usr/local/lib/python2.7/dist-packages/django/core/management/base.py", line 242, in run_from_argv
self.execute(*args, **options.__dict__)
File "/usr/local/lib/python2.7/dist-packages/django/core/management/base.py", line 280, in execute
translation.activate('en-us')
File "/usr/local/lib/python2.7/dist-packages/django/utils/translation/__init__.py", line 130, in activate
return _trans.activate(language)
File "/usr/local/lib/python2.7/dist-packages/django/utils/translation/trans_real.py", line 188, in activate
_active.value = translation(language)
File "/usr/local/lib/python2.7/dist-packages/django/utils/translation/trans_real.py", line 177, in translation
default_translation = _fetch(settings.LANGUAGE_CODE)
File "/usr/local/lib/python2.7/dist-packages/django/utils/translation/trans_real.py", line 159, in _fetch
app = import_module(appname)
File "/usr/local/lib/python2.7/dist-packages/django/utils/importlib.py", line 40, in import_module
__import__(name)
ImportError: No module named corsheaders
Solution for the no module named corsheaders Error
The solution for the no module named corsheaders is very simple. You have to first install the django-cors-headers packages in your system. You have to use the pip or pip3 command depending upon the version of the python in your system.

For python 3. xx

pip3 install django-cors-headers
For python 2. xx

pip install django-cors-headers
After the installation, you have to also Add cors-headers to INSTALLED_APPS like below before using it.

INSTALLED_APPS = (
    ...
    'corsheaders',
    ...
)
After all the settings now if you import and use the django-cors-headers , then you will not get any module named corsheaders error.

If you are still facing errors then you can contact us for more help.

)
在完成所有设置之后，如果您导入并使用django cors头，那么您将不会得到任何名为corsheaders error的模块。
如果您仍然面临错误，则可以联系我们以获取更多帮助。

pip3 install django-cors-headers


ModuleNotFoundError: No module named 'rest_framework'

要新开一个 command


pip install djangorestframework



python -m pip  install  djangorestframework   -i  https://pypi.tuna.tsinghua.edu.cn/simple

mportError: cannot import name 'render_to_response' from 'django.shortcuts' (D:\software\anaconda\envs\py374\lib\site-packages\django\shortcuts.py)      


django.core.management.base.SystemCheckError: SystemCheckError: System check identified some issues:

ERRORS:
?: (corsheaders.E013) Origin '*' in CORS_ORIGIN_WHITELIST is missing scheme or netloc
        HINT: Add a scheme (e.g. https://) or netloc (e.g. example.com).     

System check identified 1 issue (0 silenced).

django.core.exceptions.ImproperlyConfigured: WSGI application 'django_react.wsgi.application' could not be loaded; Error importing module.

请问 django ，python 等的版本是什么

https://www.markjour.com/article/20190916-django-versions.html
安装 特定版本 的 django

https://acc15t4bm5.feishu.cn/docx/doxcn1oGFhSuhWDRLgDdgEZIlsf

python manage.py runserver 0.0.0.0:8080

ModuleNotFoundError: No module named 'psutil'

https://acc15t4bm5.feishu.cn/docx/doxcnypmsvSDDWAXbMjBoRTBWVf

git remote -v

git remote add  gitee https://gitee.com/starplatinum111/django_react.git
git add .
git commit -m "django react jquery post"
git push gitee master
git push origin master